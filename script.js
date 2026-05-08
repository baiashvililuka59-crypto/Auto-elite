const cars = [
    {
        name: "Ferrari SF90 Spider",
        img: "https://images.unsplash.com/photo-1592198084033-aade902d1aae?w=800",
        desc: "Ferrari-ს ჰიბრიდული როდსტერი 1000 ცხენის ძალით.",
        specs: { "წელი": "2024", "ძრავა": "4.0L V8 Hybrid", "0-100": "2.5 წამი", "ფასი": "$570,000" }
    },
    {
        name: "Porsche 911 GT3 RS",
        img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800",
        desc: "აეროდინამიკის მწვერვალი და ტრეკის ლეგენდა.",
        specs: { "წელი": "2023", "ძრავა": "4.0L Flat-6", "0-100": "3.2 წამი", "ფასი": "$223,800" }
    },
    {
        name: "Lamborghini Revuelto",
        img: "https://images.unsplash.com/photo-1621135802920-133df287f89c?w=800",
        desc: "ახალი V12 ჰიბრიდული ეპოქის დასაწყისი.",
        specs: { "წელი": "2024", "ძრავა": "6.5L V12 Hybrid", "0-100": "2.5 წამი", "ფასი": "$608,000" }
    },
    {
        name: "Bugatti Chiron SS",
        img: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800",
        desc: "სიჩქარის სიმბოლო - 440 კმ/სთ-ზე მეტი.",
        specs: { "წელი": "2022", "ძრავა": "8.0L W16 Quad-T", "0-100": "2.4 წამი", "ფასი": "$3,800,000" }
    },
    {
        name: "Mercedes-AMG ONE",
        img: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800",
        desc: "ფორმულა 1-ის ძრავა საგზაო ავტომობილში.",
        specs: { "წელი": "2023", "ძრავა": "1.6L V6 Hybrid", "0-100": "2.9 წამი", "ფასი": "$2,700,000" }
    },
    {
        name: "McLaren 750S",
        img: "https://images.unsplash.com/photo-1621259182978-fbf93132d53d?w=800",
        desc: "ყველაზე მსუბუქი და მძლავრი სერიული McLaren.",
        specs: { "წელი": "2024", "ძრავა": "4.0L V8 Twin-T", "0-100": "2.8 წამი", "ფასი": "$324,000" }
    },
    {
        name: "Koenigsegg Jesko",
        img: "https://images.unsplash.com/photo-1614200179396-2bdb77ebf81b?w=800",
        desc: "შვედური ჰიპერკარი წარმოუდგენელი ტექნოლოგიით.",
        specs: { "წელი": "2023", "ძრავა": "5.0L V8 Twin-T", "0-100": "2.5 წამი", "ფასი": "$3,000,000" }
    },
    {
        name: "BMW M5 Label Red",
        img: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800",
        desc: "ყველაზე მძლავრი BMW M-სერიის ისტორიაში.",
        specs: { "წელი": "2024", "ძრავა": "4.4L V8 Hybrid", "0-100": "3.1 წამი", "ფასი": "$185,000" }
    },
    {
        name: "Audi RS6 Avant",
        img: "https://images.unsplash.com/photo-1606148664425-496033325c31?w=800",
        desc: "იდეალური საოჯახო მანქანა სუპერკარის ძალით.",
        specs: { "წელი": "2024", "ძრავა": "4.0L V8 Twin-T", "0-100": "3.3 წამი", "ფასი": "$125,000" }
    },
    {
        name: "Nissan GT-R R35",
        img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800",
        desc: "იაპონური ლეგენდა - 'Godzilla'.",
        specs: { "წელი": "2024", "ძრავა": "3.8L V6 Twin-T", "0-100": "2.9 წამი", "ფასი": "$121,000" }
    },
    {
        name: "Aston Martin Valkyrie",
        img: "https://images.unsplash.com/photo-1600706432502-76a0e0353997?w=800",
        desc: "ბრიტანული ჰიპერკარი კოსმოსური დიზაინით.",
        specs: { "წელი": "2023", "ძრავა": "6.5L V12", "0-100": "2.5 წამი", "ფასი": "$3,200,000" }
    },
    {
        name: "Pagani Utopia",
        img: "https://images.unsplash.com/photo-1594731802114-039942f559d4?w=800",
        desc: "ხელოვნების ნიმუში ოთხ ბორბალზე.",
        specs: { "წელი": "2024", "ძრავა": "6.0L V12 Twin-T", "0-100": "3.0 წამი", "ფასი": "$2,200,000" }
    }
];

const gallery = document.getElementById('gallery');
const modal = document.getElementById('carModal');
const modalTitle = document.getElementById('modalTitle');
const modalBody = document.getElementById('modalBody');
const closeBtn = document.querySelector('.close');

cars.forEach(car => {
    const card = document.createElement('div');
    card.className = 'car-card';
    card.innerHTML = `
        <img src="${car.img}" alt="${car.name}">
        <div class="car-info">
            <h3>${car.name}</h3>
            <p>დააჭირე დეტალებისთვის</p>
        </div>
    `;

    card.onclick = () => {
        modalTitle.innerText = car.name;
        let bodyContent = `<p style="text-align:center; margin-bottom:20px;">${car.desc}</p>`;
        
        for (let key in car.specs) {
            bodyContent += `
                <div class="spec-item">
                    <span class="spec-label">${key}:</span>
                    <span>${car.specs[key]}</span>
                </div>
            `;
        }
        
        modalBody.innerHTML = bodyContent;
        modal.style.display = "block";
    };

    gallery.appendChild(card);
});

closeBtn.onclick = () => modal.style.display = "none";
window.onclick = (event) => { if (event.target == modal) modal.style.display = "none"; };
