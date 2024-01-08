export interface IButton {
  text: string;
  disabled?: boolean;
  click?: () => void;
  routerLink?: string[];
}
