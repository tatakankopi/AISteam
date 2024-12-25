import { LucideIcon } from 'lucide-react';

export interface MenuItem {
  icon: LucideIcon;
  label: string;
  path: string;
}

export interface MenuItemProps extends MenuItem {
  isActive: boolean;
}