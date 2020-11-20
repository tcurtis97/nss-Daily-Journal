/*
 *   Journal data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

// This is the original data.
const journal = [
    {
        id: 1,
        date: "07/24/2025",
        concept: "HTML & CSS",
        entry: "We talked about HTML components and how to make grid layouts with Flexbox in CSS.",
        mood: "Ok"
    },
    {
        id: 2,
        date: "07/28/2025",
        concept: "HTML & CSS",
        entry: "We did our first group project and it was a success.",
        mood: "Happy" 
    },
    {
        id: 3,
        date: "08/3/2025",
        concept: "Javascript",
        entry: "We started javascript and everything is going okay. JS is a lot harder than html & css and its hurts my brain.",
        mood: "Sad" 
    }
]

/*
    You export a function that provides a version of the
    raw data in the format that you want
*/
export const useJournalEntries = () => {
    const sortedByDate = journal.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
}