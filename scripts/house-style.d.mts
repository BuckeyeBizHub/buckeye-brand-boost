export const BANNED: [RegExp, string][];
export function siteFactNumbers(root: string): Set<string>;
export function stripComments(src: string): string;
export function claimUnit(after: string): string | null;
export function numbersIn(text: string): string[];
export function unsourcedNumbers(html: string, facts: Set<string>): string[];
