// Minimal toast notification
function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerText = message;
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('show');
    }, 100);

    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => document.body.removeChild(toast), 500);
    }, 3000);
}

// Mini jQuery-style selector
function $(selector) {
    return document.querySelector(selector);
}

// User subscription info (mock for now)
const user = {
    hasTrainerSubscription: false // 🔥 Change to true to test
};

// DOM Elements
const sections = {
    getPlan: $('.get-plan'),
    planAccess: $('.plan-access'),
    hasSubs: $('#subs'),
    noSubs: $('#no-subs'),
    getStartedBtn: $('.get-started-btn'),
    payBtn: $('.pay-btn'),
    accessPlanBtn: $('.get-plan-btn')
};

// Update UI according to subscription status
function renderUI() {
    if (user.hasTrainerSubscription) {
        sections.getPlan.style.display = 'block';
        sections.hasSubs.style.display = 'block';
        sections.noSubs.style.display = 'none';
    } else {
        sections.getPlan.style.display = 'none';
        sections.hasSubs.style.display = 'none';
        sections.noSubs.style.display = 'block';
    }
}

// Smooth scroll to plan section
if (sections.getStartedBtn) {
    sections.getStartedBtn.addEventListener('click', () => {
        sections.planAccess.scrollIntoView({ behavior: 'smooth' });
    });
}

// Access AI Diet Plan
if (sections.accessPlanBtn) {
    sections.accessPlanBtn.addEventListener('click', () => {
        showToast('✅ AI Diet Plan Accessed Successfully!', 'success');
    });
}

// Handle Payment
if (sections.payBtn) {
    sections.payBtn.addEventListener('click', () => {
        if (confirm('Unlock AI Diet Plan for ₹99?')) {
            // Simulate payment success
            user.hasTrainerSubscription = true;
            renderUI();
            showToast('🎉 Payment Successful! Access Unlocked.', 'success');
        } else {
            showToast('❌ Payment Cancelled.', 'error');
        }
    });
}

// Initialize when DOM loads
document.addEventListener('DOMContentLoaded', renderUI);

// Toast CSS
const toastStyle = document.createElement('style');
toastStyle.innerHTML = `
.toast {
    position: fixed;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%) translateY(100px);
    background: #323232;
    color: #fff;
    padding: 12px 24px;
    border-radius: 30px;
    opacity: 0;
    transition: all 0.5s ease;
    z-index: 9999;
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    pointer-events: none;
}
.toast.success {
    background: linear-gradient(45deg, #4caf50, #2e7d32);
}
.toast.error {
    background: linear-gradient(45deg, #e53935, #b71c1c);
}
.toast.show {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
}
`;
document.head.appendChild(toastStyle);




