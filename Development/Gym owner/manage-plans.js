let plans = [];

const addPlanModal = document.getElementById('addPlanModal');
const addPlanForm = document.getElementById('addPlanForm');
const plansTableBody = document.getElementById('plans-table-body');

let editPlanId = null;

function showAddPlanModal() {
    addPlanModal.style.display = 'flex';
    addPlanForm.reset();
    editPlanId = null;
}

function closeModal() {
    addPlanModal.style.display = 'none';
}

addPlanForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const planName = document.getElementById('plan-name').value.trim();
    const price = document.getElementById('price').value.trim();
    const duration = document.getElementById('duration').value.trim();
    const features = document.getElementById('features').value.trim();

    if (editPlanId !== null) {
        plans[editPlanId] = { planName, price, duration, features };
    } else {
        plans.push({ planName, price, duration, features });
    }

    renderPlans();
    closeModal();
});

function renderPlans() {
    plansTableBody.innerHTML = '';

    plans.forEach((plan, index) => {
        const tr = document.createElement('tr');

        tr.innerHTML = `
            <td>${plan.planName}</td>
            <td>₹${plan.price}</td>
            <td>${plan.duration}</td>
            <td>${plan.features}</td>
            <td>
                <button class="action-btn edit-btn" onclick="editPlan(${index})">Edit</button>
                <button class="action-btn delete-btn" onclick="deletePlan(${index})">Delete</button>
            </td>
        `;

        plansTableBody.appendChild(tr);
    });
}

function editPlan(index) {
    const plan = plans[index];
    document.getElementById('plan-name').value = plan.planName;
    document.getElementById('price').value = plan.price;
    document.getElementById('duration').value = plan.duration;
    document.getElementById('features').value = plan.features;

    editPlanId = index;
    showAddPlanModal();
}

function deletePlan(index) {
    if (confirm('Are you sure you want to delete this plan?')) {
        plans.splice(index, 1);
        renderPlans();
    }
}

window.onclick = function(event) {
    if (event.target == addPlanModal) {
        closeModal();
    }
}

// Sidebar toggle functionality
const collapseBtn = document.querySelector('.collapse-btn');
const sidebar = document.querySelector('.sidebar');

collapseBtn.addEventListener('click', () => {
    sidebar.classList.toggle('collapsed');
});






