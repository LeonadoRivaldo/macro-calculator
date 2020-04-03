export interface IMacros {
  calories: IMacroItem[];
  macros: IMacroItem[];
}
export interface IMacroItem {
  calc: string;
  title: string;
  icon?: string;
  description?: string;
}
