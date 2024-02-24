export interface IButton {
  text?: string;
  icon?: { src: string };
  class?: string[];
  disabled?: boolean;
  click?: () => void;
  routerLink?: string[];
}
