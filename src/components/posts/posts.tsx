export interface category {
  path: string,
  title: string
  posts?: []
}

export const ALL_CATEGORIES : category[] = [{ path : 'reactjs', title : 'React JS' }];