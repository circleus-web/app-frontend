export interface IButton {
  text?: string;
  class?: string[];
  disabled?: boolean;
  click?: () => void;
  routerLink?: string[];
}
