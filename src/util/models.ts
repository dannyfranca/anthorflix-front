interface Timestampable {
  readonly created_at: string;
  readonly deleted_at: string | null;
}

interface BaseEntity extends Timestampable {
  readonly id: string;
}

export interface Genre extends BaseEntity {
  name: string;
}
