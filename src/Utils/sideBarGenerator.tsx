import { ReactNode } from "react";

export type TUserPath = {
  name?: string;
  path?: string;
  element?: ReactNode;
  children?: TUserPath[];
};
export type TSidebarItem =
  | {
      key: string;
      label: ReactNode;
      children?: TSidebarItem[];
    }
  | undefined;

export const sidebarItemsGenerator = (items: TUserPath[], role: string) => {
  console.log(role);
  const sidebarItems = items.reduce((acc: TSidebarItem[], item) => {
    if (item.path && item.name) {
      acc.push({
        key: item.name,
        label: `/${role}/${item.path}`,
      });
    }

    if (item.children) {
      acc.push({
        key: item.name as string,
        label: item.name,
        children: item.children.map((child) => {
          if (child.name) {
            return {
              key: child.name,
              label: `/${role}/${item.path}`,
            };
          }
        }),
      });
    }
    return acc;
  }, []);

  return sidebarItems;
};
