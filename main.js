const app = {
    data: {
      url: "http://localhost:3000/notes/",
      notes: []
    },



    // CRUD leave create and edit for last. start with delete
    // GPPD Get-receive data from a server, Post-Send data to a server
    // Put-Send and overwrite existing data, Delete- delete data from a server

    getNotes: function() {
        fetch(this.data.url, {
        method: 'GET',
        Headers:{"Content-Type": "application/json"}
    })
      .then(r => r.json())
      .then(response => {
        for (let note of response) {
         this.data.notes.push(note)
        };
        this.generateNotesHTML();
     })
     notes.addEventListener('load', function () {
        console.log(notes.resonseText);
     })
 },

deleteNote: function(noteId) {

}

confirmDelete: Function() {

 }



 displayEditForm: function(note) {
console
 }

     generateNotesHTML: () => {        
            const container = document.getElementById('container');
            for (let note of this.data.notes) {
              container.innerHTML += `
                <div class="noteCard">
                  <div>${note.title}</div>
                  <div>${note.body}</div>
                  <button class="editButton" data-id=${note.id}>Edit</button>
                  <button class="deleteButton" data-id=${note.id}>Delete</button>
              </div>
              `}
              this.addEventListener('load')
            }
        

app.main()
