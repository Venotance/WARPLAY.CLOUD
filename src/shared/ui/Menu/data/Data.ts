export interface LinkNavInterface {
  name: string;
  link: string;
  id: number;
}

export const MenuObj: LinkNavInterface[] = [
  { name: 'Main', link: '/', id: 0 },
  { name: 'Servers', link: 'servers', id: 1 },
  { name: 'Servers', link: 'servers', id: 2 },
  { name: 'Open in browser', link: '#', id: 3 },
  { name: 'Prices', link: 'prices', id: 4 },
  { name: 'Contacts', link: 'contacts', id: 5 },
];
