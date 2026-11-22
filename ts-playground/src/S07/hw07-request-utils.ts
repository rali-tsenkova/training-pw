// create small, pure, typed function for id formatting

export function idFormat(id: number, prefix = 'REQ'): string {
  return `${prefix}-${id}`;
}

// create small, pure, typed function for SLA calculation
export function slaHours(priority: number): number {
    if (priority === 1) {
        return 4;
    }
    return priority <= 2 ? 24 : 72;
}

// create small, pure, typed function for overdue check
export function isOverdue(hCreated: number, hCurrent: number, priority: number): boolean {
    const sla = slaHours(priority);
    return hCurrent - hCreated > sla;
}

// create small, pure, typed function for title validation (5–100 characters)
export function isTitleValid(title: string): boolean {
    return title.length >= 5 && title.length <= 100;
}

// create small, pure, typed function for category check against an allowed list
export function isValidCategory(category: string, allowedCategories: string[]): boolean {
    return allowedCategories.includes(category);
}

// create small, pure, typed function for summary text
export function summaryPrint(text: string, maxLength: number): void {
    var formattedID = idFormat(7);
    console.log(`Formatted ID is: ${formattedID}`);
    var slaCalc = slaHours(2);
    console.log(`SLA hours: ${slaCalc}`);
    var overdue = isOverdue(10, 40, 2);
    console.log(`Is overdue: ${overdue}`);
    var titleValid = isTitleValid("Fix the pothole on Main Street");
    console.log(`Is title valid: ${titleValid}`);
    var categoryValid = isValidCategory("Roads", ["Roads", "Lighting", "Parks"]);
    console.log(`Is category valid: ${categoryValid}`);
}