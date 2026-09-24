# 🩸 Musaef Platform

**Musaef** is a promising digital platform designed to facilitate and organize the blood donation process, connecting blood donors with patients in need and hospitals during emergencies in a smart and fast manner.

---

## 🌟 Platform Features

- ⚡ **Fast Response:** Instant connection between donors and those in need during emergencies.
- 🩸 **Blood Type Guide:** A comprehensive explanatory table displaying blood type compatibility for donation and reception.
- 🏥 **Hospital Integration:** Track donation requests and urgent cases across centers and hospitals.
- 🔒 **Secure & Reliable:** Complete confidentiality for donors' and beneficiaries' data.

---

## 📸 Screenshots

### 1. Home Page
![Home Page](./src/assets/screenshots/01-home-page.jpeg)

### 2. About Us
![About Us](./src/assets/screenshots/02-about-us.jpeg)

### 3. Donation Guide
![Donation Guide](./src/assets/screenshots/03-donation-guide.jpeg)

### 4. Sign Up
![Sign Up](./src/assets/screenshots/04-signup-page.jpeg)

### 5. Login
![Login](./src/assets/screenshots/05-login-page.jpeg)

---

## 🛠️ Tech Stack

- **Frontend:** Vue.js / HTML5 / CSS3 / JavaScript
- **Version Control:** Git & GitHub

---

## 🚀 Setup & Run

1. **Clone the Project:**
   ```bash
   git clone https://github.com/atya10/musaef-platform.git
   ```

# Musaef — Frontend

A smart platform connecting donors with patients in need and facilitating blood donation during emergencies.
This frontend is built using **Vue 3 + Vite**, with **Bootstrap 5** for styling and components, **Pinia** for state management, **Vue Router** for navigation, and **Vue I18n** for Arabic and English internationalization support — following the exact architectural structure outlined in the "Comprehensive Frontend Architecture Document".

## Local Setup

The project requires Node.js (version 18 or higher). Inside the project directory:

```bash
npm install
npm run dev
```

The application will automatically launch at `http://localhost:5173`.

For Production Build:

```bash
npm run build
npm run preview   # To preview the production build locally
```

## Project Structure

The project is organized in alignment with the architecture guidelines:

```
src/
  api/            ← Backend communication (Axios) — axios.js, auth.js, donor.js...
  stores/         ← Centralized state management (Pinia) — authStore, donorStore...
  composables/    ← Reusable business logic — useAuth, useEmergency...
  layouts/        ← Layout templates — AuthLayout, PublicLayout, DonorLayout...
  router/         ← Route definitions and guards (index.js)
  views/          ← System pages categorized by user role (public/donor/hospital/admin/common)
  components/     ← Reusable components (common/auth/donor/hospital/admin/charts/maps)
  locales/        ← Translation files (ar.json, en.json) & Vue I18n setup
  utils/          ← Utility functions & constants (blood types, dates, etc.)
  styles/         ← Design system & styling (variables.css, main.css, responsive.css)
  assets/images/  ← Project media (logo, icons, illustrations)
```

## ⚠️ Important Note: Mock Mode

**There is currently no active live Backend server linked to the project.** Therefore:

- All `src/stores/*.js` files operate with `MOCK_MODE = true` by default, using static dummy data (which can be edited directly inside each Store file).
- Authentication in `authStore.js` accepts **any email and password**, generating a mock session purely for interface preview purposes — **not actual authentication**.
- On the login page (`AuthPage.vue`), quick buttons ("Demo Login as: Donor / Hospital / Admin") have been added to easily navigate all three dashboards without registering an account.
- The `src/api/*.js` files are fully configured with real `axios` calls as expected by a Laravel backend. Once the live server is ready, simply:
  1. Update `VITE_API_BASE_URL` in the `.env` file (create one if missing) to point to the live server address.
  2. Set `MOCK_MODE` to `false` inside each file under `src/stores/`.

No additional changes are required — the UI is built to seamlessly transition to a live backend in just these two steps without rewriting any components or pages.

## Assets Used

All six image files are located in `src/assets/images/` with clear naming:

| File | Usage |
|---|---|
| `logo-full.jpg` | Full logo displayed in Header and Sidebar |
| `drop-icon.png` | Fixed small blood drop icon on top of Auth pages |
| `hero-photo.jpg` | Donor/Ambulance hero photo on Login and Sign Up pages |
| `drop-hero.jpg` | Blood drop hero image on the Home Page |
| `ai-doctor.jpg` | AI Doctor illustration in the "About Us" section |
| `blood-types.jpg` | Blood type overview image on the Donation Guide page |

## Recommended Future Enhancements

- Connect `src/components/charts/SimpleBarChart.vue` to a full-featured charting library (e.g., Chart.js) when advanced analytics are needed.
- Integrate `src/components/maps/MapPlaceholder.vue` with an interactive map library (such as Leaflet or Google Maps) to display live hospital locations and emergency alerts.
- Add Automated Testing (Unit/E2E) as needed.
