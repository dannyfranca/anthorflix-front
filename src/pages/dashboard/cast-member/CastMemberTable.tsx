import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { IconButton, ThemeProvider } from "@mui/material";
import { useSnackbar } from "notistack";
import { useTranslation } from "react-i18next";

import i18next from "@/i18t";
import { dataTableTheme } from "@/config/data-table-theme";
import EditIcon from "@mui/icons-material/Edit";
import { formatDateFromIso } from "@/util/date";
import { CastMember } from "@/util/models";
import HttpResource from "@/util/http/http-resource";
import { Creators } from "@/store/filter";
import DataTable, { DataTableColumn } from "@/components/Table";
import FilterResetButton from "@/components/Table/FilterResetButton";
import useFilter, { FilterManager } from "@/hooks/useFilter";
import castMemberHttp from "@/util/http/cast-member-http";
import { handleRequestError } from "@/util/request-error-handler";

const columns: DataTableColumn[] = [
  {
    name: "id",
    label: "ID",
    width: "30%",
    options: {
      sort: false,
    },
  },
  {
    name: "name",
    label: i18next.t("Name"),
    width: "30%",
  },
  {
    name: "created_at",
    label: i18next.t("Created at"),
    width: "15%",
    options: {
      customBodyRender(value) {
        return <span>{formatDateFromIso(value)}</span>;
      },
    },
  },
  {
    name: "actions",
    label: i18next.t("Actions"),
    options: {
      customBodyRender: (value, tableMeta) => {
        return (
          <IconButton
            color="primary"
            component={Link}
            to={`cast_members/${tableMeta.rowData[0]}/edit`}
          >
            <EditIcon />
          </IconButton>
        );
      },
    },
  },
];

const CastMemberTable: React.FC = () => {
  const { t } = useTranslation();
  const snackbar = useSnackbar();
  const mounted = useRef(true);
  const [data, setData] = useState<CastMember[]>([]);
  const [loading, setLoading] = useState(false);
  const {
    dispatchFilterState,
    filterState,
    debouncedFilterState,
    setTotalRecords,
    totalRecords,
    filterManager,
  } = useFilter({ columns });

  const getData = () => {
    setLoading(true);
    castMemberHttp
      .list({
        queryParams: {
          search: FilterManager.cleanSearchText(filterState.search),
          page: filterState.page,
          per_page: filterState.page_size,
          sort: filterState.sort_by,
          dir: filterState.sort_dir,
        },
      })
      .then(({ data }) => {
        if (!mounted.current) return;
        setData(data);
        setTotalRecords(data.length);
        // setTotalRecords(meta?.total);
      })
      .catch(handleRequestError(snackbar)(t))
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    mounted.current = true;
    getData();
    return () => {
      mounted.current = false;
    };
  }, []);

  useEffect(() => {
    mounted.current = true;
    filterManager.pushHistory();
    getData();
    return () => {
      mounted.current = false;
    };
  }, [
    FilterManager.cleanSearchText(debouncedFilterState.search),
    debouncedFilterState.page,
    debouncedFilterState.page_size,
    debouncedFilterState.sort_by,
    debouncedFilterState.sort_dir,
  ]);

  return (
    <ThemeProvider theme={dataTableTheme}>
      <DataTable
        title=""
        data={data}
        columns={columns}
        loading={loading}
        options={{
          serverSide: true,
          searchText: filterState.search as any,
          page: filterState.page,
          rowsPerPage: filterState.page_size,
          rowsPerPageOptions: filterManager.pageSizeOptions,
          count: totalRecords,
          sortOrder: filterState.sort_by
            ? {
                name: filterState.sort_by,
                direction: filterState.sort_dir ?? "asc",
              }
            : ({} as any),
          customToolbar: () => (
            <FilterResetButton
              handleClick={() => dispatchFilterState(Creators.setReset())}
            />
          ),
          onSearchChange: (value) => filterManager.changeSearch(value),
          onChangePage: (page) => filterManager.changePage(page),
          onChangeRowsPerPage: (pageSize) =>
            filterManager.changePageSize(pageSize),
          onColumnSortChange: (changedColumn, sortDirection) =>
            filterManager.changeOrder(changedColumn, sortDirection),
        }}
      />
    </ThemeProvider>
  );
};

export default CastMemberTable;
