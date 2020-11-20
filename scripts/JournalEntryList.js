/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
export const JournalEntryComponent = (entry) => {
    return `
        <section id="entry--${entry.id}" class="journalEntry">
        <ul>
        <div class="journal__id">${entry.id}</div>
        <div class="journal__date">${entry.date}</div>
        <div class="journal__concept">${entry.concept}</div>
        <div class="journal__entry">${entry.entry}</div>
        <div class="journal__mood">${entry.mood}</div>
        </ul>
        </section>
    `
}