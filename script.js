const cars = [
    {
        name: "Ferrari SF90 Spider",
        img: "https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&w=800&q=80",
        desc: "SF90 Spider არის Ferrari-ს პირველი ჰიბრიდული როდსტერი. მას აქვს 1000 ცხენის ძალა და 0-დან 100-მდე სულ რაღაც 2.5 წამში ჩქარდება."
    },
    {
        name: "Porsche 911 GT3",
        img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80",
        desc: "Porsche 911 GT3 არის ნამდვილი სარბოლო ავტომობილი, რომელიც ლეგალურაია გზებისთვის. მისი 4.0 ლიტრიანი ძრავა უნიკალურ ხმას გამოსცემს."
    },
    {
        name: "BMW M4 Competition",
        img: "https://images.unsplash.com/photo-1617814076367-b759c7d6274a?auto=format&fit=crop&w=800&q=80",
        desc: "M4 Competition აერთიანებს კომფორტს და წარმოუდგენელ სიმძლავრეს. იდეალურია როგორც ყოველდღიური მართვისთვის, ისე ტრეკისთვის."
    }
];

const gallery = document.getElementById('gallery');
const modal = document.getElementById('carModal');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');
const closeBtn = document.querySelector('.close');

// მანქანების გამოტანა ეკრანზე
cars.forEach(car => {
    const card = document.createElement('div');
    card.className = 'car-card';
    card.innerHTML = `
        <img src="${car.img}">
        <div class="car-info">
            <h3>${car.name}</h3>
            <p>დააჭირე დეტალებისთვის</p>
        </div>
    `;

    // დაჭერის ფუნქცია (კლიკი)
    card.onclick = () => {
        modalTitle.innerText = car.name;
        modalDesc.innerText = car.desc;
        modal.style.display = "block";
    };

    gallery.appendChild(card);
});

// ფანჯრის დახურვა X-ზე დაჭერით
closeBtn.onclick = () => {
    modal.style.display = "none";
};

// ფანჯრის დახურვა ეკრანზე ნებისმიერ ადგილას დაჭერით
window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
