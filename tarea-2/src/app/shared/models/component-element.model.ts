export interface Card {
  image: string,
  title: string,
  subTitle?: string,
  text: string
}

export interface Link {
  name: string,
  url: string
}

export interface Item {
  id: number,
  text: string,
  altText?: string,
  qty?: number,
}

export interface Pagination {
  itemsLength: number;
  itemsPerPage: number;
  currentPage: number;
}