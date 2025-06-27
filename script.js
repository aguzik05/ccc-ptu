document.addEventListener("DOMContentLoaded", ()=>{
    const ptu = document.getElementById("ptu")
    const cr = document.getElementById("cr")

    document.getElementById("wylicz").addEventListener("click", ()=>{
        let brakujace = []
        document.querySelectorAll(".kontrolka").forEach(kontrolka=>{
            if(!kontrolka.value){
                brakujace.push(kontrolka.id)
            }
        })

        if(brakujace.length > 0){
            alert("Uzupełnij pola: \n" + brakujace)
            throw new Error("Podano błędne dane")
        }

        ptu.textContent = "PTU: " + ((document.getElementById("Sztuki").value - document.getElementById("Torby").value)/document.getElementById("Paragony").value).toFixed(2)
        cr.textContent = "CR: " +(document.getElementById("Paragony").value/document.getElementById("Klienci").value).toFixed(2)*100+"%"
    })
})