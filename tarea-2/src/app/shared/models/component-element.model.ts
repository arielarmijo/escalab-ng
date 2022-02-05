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

export interface ListItem {
  name: string,
  altName?: string
}