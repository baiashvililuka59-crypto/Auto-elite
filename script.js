const cars = [
    {
        name: "Ferrari SF90 Spider",
        img: "https://images.unsplash.com/photo-1592198084033-aade902d1aae?w=800",
        desc: "Ferrari-ს ჰიბრიდული ეპოქის სიმბოლო. ეს არის მანქანა, რომელიც არღვევს ფიზიკის კანონებს.",
        specs: { "წელი": "2024", "ძრავა": "4.0L V8 Hybrid", "სიმძლავრე": "1000 hp", "0-100": "2.5 წ", "ფასი": "$570,000" }
    },
    {
        name: "Porsche 911 GT3 RS",
        img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800",
        desc: "სარბოლო ტრეკის მეფე, რომელიც საგზაო მოძრაობისთვისაა დაშვებული. აეროდინამიკის მწვერვალი.",
        specs: { "წელი": "2023", "ძრავა": "4.0L Flat-6", "სიმძლავრე": "518 hp", "0-100": "3.2 წ", "ფასი": "$223,800" }
    },
    {
        name: "Lamborghini Revuelto",
        img: "https://images.unsplash.com/photo-1621135802920-133df287f89c?w=800",
        desc: "V12 ძრავისა და სამი ელექტროძრავის კომბინაცია. ნამდვილი იტალიური გაბრაზებული ხარი.",
        specs: { "წელი": "2024", "ძრავა": "6.5L V12 Hybrid", "სიმძლავრე": "1001 hp", "0-100": "2.5 წ", "ფასი": "$600,000" }
    },
    {
        name: "Bugatti Chiron SS",
        img: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800",
        desc: "საინჟინრო ხელოვნების ნიმუში. ერთ-ერთი ყველაზე სწრაფი სერიული ავტომობილი კაცობრიობის ისტორიაში.",
        specs: { "წელი": "2022", "ძრავა": "8.0L W16 Quad-T", "სიმძლავრე": "1600 hp", "0-100": "2.4 წ", "ფასი": "$3,800,000" }
    },
    {
        name: "Mercedes-AMG ONE",
        img: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800",
        desc: "ნამდვილი Formula 1-ის ძრავა საგზაო მანქანაში. მისი მართვა ხელოვნებაა.",
        specs: { "წელი": "2023", "ძრავა": "1.6L V6 Hybrid", "სიმძლავრე": "1063 hp", "0-100": "2.9 წ", "ფასი": "$2,700,000" }
    },
    {
        name: "McLaren 750S",
        img: "https://images.unsplash.com/photo-1621259182978-fbf93132d53d?w=800",
        desc: "ბრიტანული სისწრაფე და სიმსუბუქე. საუკეთესო მართვადობის მქონე სუპერკარი.",
        specs: { "წელი": "2024", "ძრავა": "4.0L V8 Twin-T", "სიმძლავრე": "740 hp", "0-100": "2.8 წ", "ფასი": "$324,000" }
    },
    {
        name: "Koenigsegg Jesko",
        img: "https://images.unsplash.com/photo-1614200179396-2bdb77ebf81b?w=800",
        desc: "შვედური ჰიპერკარი, რომელიც 480 კმ/სთ-ზე მეტ სიჩქარეს ანვითარებს.",
        specs: { "წელი": "2023", "ძრავა": "5.0L V8 Twin-T", "სიმძლავრე": "1600 hp", "0-100": "2.5 წ", "ფასი": "$3,000,000" }
    },
    {
        name: "BMW M5 Label Red",
        img: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800",
        desc: "ყველაზე მძლავრი BMW M სერიის ისტორიაში. კომფორტული და წარმოუდგენლად სწრაფი სედანი.",
        specs: { "წელი": "2024", "ძრავა": "4.4L V8 Hybrid", "სიმძლავრე": "738 hp", "0-100": "3.1 წ", "ფასი": "$185,000" }
    },
    {
        name: "Audi RS6 Avant",
        img: "https://images.unsplash.com/photo-1606148664425-496033325c31?w=800",
        desc: "მსოფლიოში საუკეთესო უნივერსალი. ოჯახური მანქანა სუპერკარის მონაცემებით.",
        specs: { "წელი": "2024", "ძრავა": "4.0L V8 Twin-T", "სიმძლავრე": "621 hp", "0-100": "3.3 წ", "ფასი": "$125,000" }
    },
    {
        name: "Nissan GT-R R35",
        img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800",
        desc: "ლეგენდარული 'Godzilla'. იაპონური ინჟინერიის სიმბოლო, რომელიც ყველას უსწრებს.",
        specs: { "წელი": "2024", "ძრავა": "3.8L V6 Twin-T", "სიმძლავრე": "565 hp", "0-100": "2.9 წ", "ფასი": "$121,000" }
    }
];

const gallery = document.getElementById('gallery');
const modal = document.getElementById('carModal');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');
const closeBtn = document.querySelector('.close');

cars.forEach(car => {
    const card = document.createElement('div');
    card.className = 'car-card';
    card.innerHTML = `
        <img src="${car.img}" alt="${car.name}">
        <div class="car-info">
            <h3>${car.name}</h3>
            <p>დააჭირე მონაცემებისთვის</p>
        </div>
    `;

    card.onclick = () => {
        modalTitle.innerText = car.name;
        let specsHtml = `<p style="margin-bottom:15px; font-style:italic;">${car.desc}</p><div style="text-align:left; border-top:1px solid #d4af37; padding-top:10px;">`;
        for (let key in car.specs) {
            specsHtml += `<div style="margin: 8px 0; display:flex; justify-content:space-between; border-bottom: 1px solid #333;">
                <span style="color: #d4af37; font-weight: bold;">${key}:</span> 
                <span style="color: white;">${car.specs[key]}</span>
            </div>`;
        }
        specsHtml += `</div>`;
        modalDesc.innerHTML = specsHtml;
        modal.style.display = "block";
    };

    gallery.appendChild(card);
});

closeBtn.onclick = () => modal.style.display = "none";
window.onclick = (event) => { if (event.target == modal) modal.style.display = "none"; };
