// script.js
const medicines = [{
    name: "Paracetamol",
    manufacturer: "ABC Pharma",
    dosage: "500mg",
    price: 50.00,
    stock: 100,
    expiry: "31/12/2025"
},
{
    name: "Amoxicillin",
    manufacturer: "XYZ Pharma",
    dosage: "250mg",
    price: 100.00,
    stock: 50,
    expiry: "30/06/2024"
},
{
    name: "Ibuprofen",
    manufacturer: "DEF Pharma",
    dosage: "400mg",
    price: 75.00,
    stock: 75,
    expiry: "31/03/2025"
},
{
    name: "Cetirizine",
    manufacturer: "PharmaCorp",
    dosage: "10mg",
    price: 30.00,
    stock: 200,
    expiry: "15/11/2025"
},
{
    name: "Loratadine",
    manufacturer: "MediHealth",
    dosage: "10mg",
    price: 45.00,
    stock: 150,
    expiry: "20/09/2024"
},
{
    name: "Omeprazole",
    manufacturer: "GastroCare",
    dosage: "20mg",
    price: 80.00,
    stock: 120,
    expiry: "25/08/2025"
},
{
    name: "Metformin",
    manufacturer: "DiabetoPharm",
    dosage: "500mg",
    price: 65.00,
    stock: 90,
    expiry: "15/07/2025"
},
{
    name: "Atorvastatin",
    manufacturer: "CardioPharm",
    dosage: "10mg",
    price: 120.00,
    stock: 80,
    expiry: "30/10/2024"
},
{
    name: "Amlodipine",
    manufacturer: "BP Solutions",
    dosage: "5mg",
    price: 90.00,
    stock: 110,
    expiry: "20/06/2025"
},
{
    name: "Losartan",
    manufacturer: "HeartCare",
    dosage: "50mg",
    price: 110.00,
    stock: 70,
    expiry: "5/5/2025"
},
{
    name: "Levothyroxine",
    manufacturer: "ThyroPharm",
    dosage: "50mcg",
    price: 70.00,
    stock: 130,
    expiry: "15/08/2024"
},
{
    name: "Albuterol",
    manufacturer: "RespiraPharm",
    dosage: "100mcg",
    price: 150.00,
    stock: 60,
    expiry: "15/08/2024"
},
{
    name: "Metoprolol",
    manufacturer: "CardioCare",
    dosage: "50mg",
    price: 105.00,
    stock: 85,
    expiry: "25/07/2024"
},
{
    name: "Gabapentin",
    manufacturer: "NeuroPharm",
    dosage: "300mg",
    price: 140.00,
    stock: 95,
    expiry: "30/09/2025"
},
{
    name: "Tramadol",
    manufacturer: "PainRelief Inc.",
    dosage: "50mg",
    price: 180.00,
    stock: 40,
    expiry: "15/06/2024"
},
{
    name: "Diazepam",
    manufacturer: "CalmPharm",
    dosage: "5mg",
    price: 200.00,
    stock: 55,
    expiry: "20/03/2025"
},
{
    name: "Ciprofloxacin",
    manufacturer: "AntibioPharm",
    dosage: "500mg",
    price: 160.00,
    stock: 65,
    expiry: "28/02/2025"
},
{
    name: "Azithromycin",
    manufacturer: "ZithroPharm",
    dosage: "250mg",
    price: 220.00,
    stock: 75,
    expiry: "30/11/2024"
},
{
    name: "Prednisone",
    manufacturer: "SteroidPharm",
    dosage: "10mg",
    price: 95.00,
    stock: 100,
    expiry: "15/01/2025"
},
{
    name: "Warfarin",
    manufacturer: "BloodThin Inc.",
    dosage: "5mg",
    price: 130.00,
    stock: 50,
    expiry: "20/07/2025"
},
{
    name: "Insulin Glargine",
    manufacturer: "DiabetoCare",
    dosage: "100IU/ml",
    price: 250.00,
    stock: 30,
    expiry: "25/09/2024"
},
{
    name: "Furosemide",
    manufacturer: "DiurexPharm",
    dosage: "40mg",
    price: 60.00,
    stock: 140,
    expiry: "15/06/2024"
},
{
    name: "Hydrochlorothiazide",
    manufacturer: "AquaPharm",
    dosage: "25mg",
    price: 55.00,
    stock: 120,
    expiry: "5/10/2024"
},
{
    name: "Sertraline",
    manufacturer: "MentisPharm",
    dosage: "50mg",
    price: 170.00,
    stock: 60,
    expiry: "30/08/2024"
},
{
    name: "Escitalopram",
    manufacturer: "NeuroCare",
    dosage: "10mg",
    price: 190.00,
    stock: 70,
    expiry: "10/9/2024"
},
{
    name: "Metronidazole",
    manufacturer: "AntibioCare",
    dosage: "500mg",
    price: 125.00,
    stock: 80,
    expiry: "25/06/2025"
},
{
    name: "Doxycycline",
    manufacturer: "TetraPharm",
    dosage: "100mg",
    price: 145.00,
    stock: 90,
    expiry: "15/08/2024"
},
{
    name: "Clopidogrel",
    manufacturer: "CardioGuard",
    dosage: "75mg",
    price: 210.00,
    stock: 100,
    expiry: "20/05/2025"
},
{
    name: "Pantoprazole",
    manufacturer: "GastroShield",
    dosage: "40mg",
    price: 100.00,
    stock: 75,
    expiry: "30/07/2024"
},
{
    name: "Simvastatin",
    manufacturer: "CholestoPharm",
    dosage: "20mg",
    price: 115.00,
    stock: 65,
    expiry: "5/3/2025"
},
{
    name: "Fluoxetine",
    manufacturer: "MoodPharm",
    dosage: "20mg",
    price: 150.00,
    stock: 120,
    expiry: "10/4/2025"
},
{
    name: "Ranitidine",
    manufacturer: "AcidRelief Inc.",
    dosage: "150mg",
    price: 85.00,
    stock: 55,
    expiry: "25/11/2024"
},
{
    name: "Lisinopril",
    manufacturer: "BP Care",
    dosage: "10mg",
    price: 70.00,
    stock: 40,
    expiry: "5/1/2025"
},
{
    name: "Montelukast",
    manufacturer: "AsthmaPharm",
    dosage: "10mg",
    price: 185.00,
    stock: 95,
    expiry: "30/12/2024"
},
{
    name: "Pregabalin",
    manufacturer: "NeuroRelief",
    dosage: "75mg",
    price: 220.00,
    stock: 110,
    expiry: "10/6/2025"
},
{
    name: "Tamsulosin",
    manufacturer: "UroPharm",
    dosage: "0.4mg",
    price: 165.00,
    stock: 50,
    expiry: "25/08/2024"
},
{
    name: "Bisoprolol",
    manufacturer: "CardioSafe",
    dosage: "5mg",
    price: 120.00,
    stock: 60,
    expiry: "15/05/2025"
},
{
    name: "Diclofenac",
    manufacturer: "PainAway Inc.",
    dosage: "50mg",
    price: 90.00,
    stock: 70,
    expiry: "5/9/2024"
},
{
    name: "Citalopram",
    manufacturer: "MentisCare",
    dosage: "20mg",
    price: 140.00,
    stock: 80,
    expiry: "30/09/2024"
},
{
    name: "Venlafaxine",
    manufacturer: "NeuroMood",
    dosage: "75mg",
    price: 200.00,
    stock: 90,
    expiry: "10/2/2025"
},
{
    name: "Atenolol",
    manufacturer: "HeartSafe",
    dosage: "50mg",
    price: 80.00,
    stock: 100,
    expiry: "15/09/2024"
},
{
    name: "Clonazepam",
    manufacturer: "AnxioPharm",
    dosage: "1mg",
    price: 195.00,
    stock: 75,
    expiry: "5/1/2025"
},
{
    name: "Methotrexate",
    manufacturer: "RheumaPharm",
    dosage: "2.5mg",
    price: 250.00,
    stock: 65,
    expiry: "30/12/2024"
},
{
    name: "Allopurinol",
    manufacturer: "Uricare",
    dosage: "100mg",
    price: 105.00,
    stock: 120,
    expiry: "5/3/2025"
},
{
    name: "Spironolactone",
    manufacturer: "DiurexCare",
    dosage: "25mg",
    price: 75.00,
    stock: 55,
    expiry: "10/4/2025"
},
{
    name: "Quetiapine",
    manufacturer: "PsychoPharm",
    dosage: "25mg",
    price: 230.00,
    stock: 40,
    expiry: "20/07/2024"
},
{
    name: "Risperidone",
    manufacturer: "MentisRelief",
    dosage: "2mg",
    price: 215.00,
    stock: 95,
    expiry: "25/03/2025"
},
{
    name: "Olanzapine",
    manufacturer: "NeuroMentis",
    dosage: "5mg",
    price: 240.00,
    stock: 50,
    expiry: "20/10/2024"
},
{
    name: "Trazodone",
    manufacturer: "SleepPharm",
    dosage: "50mg",
    price: 175.00,
    stock: 60,
    expiry: "15/02/2025"
}
];
const medicineSelect = document.getElementById("medicine-select");
medicines.forEach((medicine) => {
const option = document.createElement("option");
option.value = medicine.name;
option.textContent = `${medicine.name} - ₹${medicine.price}`;
medicineSelect.appendChild(option);
});

let cart = [];

function addMedicine() {
const selectedMedicineName = medicineSelect.value;
if (!selectedMedicineName) return alert("Please select a medicine!");

const medicine = medicines.find((m) => m.name === selectedMedicineName);
const existingItem = cart.find((item) => item.name === selectedMedicineName);

if (existingItem) {
    existingItem.quantity++;
} else {
    cart.push({
        name: medicine.name,
        price: medicine.price,
        quantity: 1
    });
}

updateCartTable();
updateTotalBill();
}

function updateQuantity(button, change, medicineName) {
const item = cart.find((item) => item.name === medicineName);

if (item) {
    item.quantity += change;
    if (item.quantity <= 0) {
        cart = cart.filter((i) => i.name !== medicineName);
    }
    updateCartTable();
    updateTotalBill();
}
}

function updateCartTable() {
const cartTableBody = document.querySelector("#cart-table tbody");
cartTableBody.innerHTML = "";

cart.forEach((item) => {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${item.name}</td>
        <td>${item.price}</td>
        <td>
            ${item.quantity}
        </td>
        <td>${(item.price * item.quantity).toFixed(2)}</td>
        <td>
            <button onclick="updateQuantity(this, -1, '${item.name}')">-</button>
            <button onclick="updateQuantity(this, 1, '${item.name}')">+</button>
        </td>
    `;
    cartTableBody.appendChild(row);
});
}

function updateTotalBill() {
const totalAmount = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
document.getElementById("total-amount").textContent = totalAmount.toFixed(2);
}

function showCardDetails() {
document.getElementById("card-details").style.display = "block";
document.getElementById("qr-code-section").style.display = "none";
}

function showOnlinePayment() {
document.getElementById("qr-code-section").style.display = "block";
document.getElementById("card-details").style.display = "none";
}

function hidePaymentDetails() {
document.getElementById("card-details").style.display = "none";
document.getElementById("qr-code-section").style.display = "none";
}

function generateInvoice() {
const totalAmount = document.getElementById("total-amount").textContent;
let invoiceHTML = `
    <div class="invoice-header">
        <h2>Jeevan Dhara</h2>
        <p>Invoice</p>
    </div>
    <table class="invoice-table">
        <thead>
            <tr>
                <th>Medicine Name</th>
                <th>Price (₹)</th>
                <th>Quantity</th>
                <th>Total (₹)</th>
            </tr>
        </thead>
        <tbody>`;

cart.forEach((item) => {
    invoiceHTML += `
        <tr>
            <td>${item.name}</td>
            <td>${item.price}</td>
            <td>${item.quantity}</td>
            <td>${(item.price * item.quantity).toFixed(2)}</td>
        </tr>`;
});

invoiceHTML += `
        </tbody>
    </table>
    <div class="invoice-total">
        Total: ₹${totalAmount}
    </div>`;

document.getElementById("invoice").innerHTML = invoiceHTML;
}
