const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { name: "home", path: "", component: () => import("pages/HomeView.vue") },
      {
        path: "description",
        component: () => import("pages/DescriptionPage.vue"),
      },
      { path: "booking", component: () => import("pages/BookingPage.vue") },
      {
        name: "confirm",
        path: "/booking-confirm/:id",
        component: () => import("pages/BookingConfirmPage.vue"),
      },
      {
        path: "photos",
        name: "photos",
        component: () => import("pages/PhotosPage.vue"),
      },
      { path: "contact", component: () => import("pages/ContactPage.vue") },
      {
        path: "administration-agenda",
        name: "admin",
        component: () => import("../pages/AdminPage.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
