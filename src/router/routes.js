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
      { path: "tax", component: () => import("pages/TaxPage.vue") },
      { path: "contact", component: () => import("pages/ContactPage.vue") },
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
