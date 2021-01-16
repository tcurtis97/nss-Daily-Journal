
const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".journalForms")

const render = () => {
    contentTarget.innerHTML = `
    <section class="con">
    <form action=""> 
    <div>
    <label for="mood">Mood of the day</label>
    <select name="mood" id="mood">
        <option value="Happy">Happy</option>
        <option value="Sad">Sad</option>
        <option value="Angry">Angry</option>
        <option value="Ok">Ok</option>
        <option value="Afraid">Afraid</option>
    </select>
    </div>    
    </form>
    <form action="">
    <div class="fieldset">
    <label for="journalDate">Date of entry</label>
    <input type="date" name="journalDate" id="journalDate">
    </div> 
    </form>
    <form action="">
    <div class="fieldset" >
     <label for="concepts">Concepts Covered</label>
    <input type="text" name="concepts" id="concept">
    </div>
    </form>
    <form action="">
    <div class="fieldset">
    <label for="journalEntry">Journal Entry</label>
    <textarea name="journalEntry" id="journalEntry" cols="30" rows="10"></textarea> 
    </div>
    </form>
    <button type="button">Record Journal Entry</button>
    </section>
    `
}

export const JournalForm = () => {
   render()
}


eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveEntry") {

        // need to gather the data from the form
       const date = document.querySelector("#journalDate").value
        const concept = document.querySelector("#concept").value
        const entry = document.querySelector("#journalEntry").value
        const mood = document.querySelector("#mood").value

        // Make a new object representation of a note
        const newEntry = {
            date: date,
            concept: concept,
            entry: entry,
            mood: mood
            // Key/value pairs here
        }

        // Change API state and application state
        saveJournalEntry(newEntry)
    }
})