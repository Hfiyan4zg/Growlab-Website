'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("lowongan_pekerjaans", [
      {
        nama_lowongan_pekerjaan: "UI/UX Designer",
        batas_lamar: new Date('2024-12-31T23:59:59.999Z'),
        deskripsi_lowongan_pekerjaan: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        persyaratan_lowongan_pekerjaan: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        id_departemen_pekerjaan: 1,
        id_periode_pekerjaan: 1,
        id_tipe_pekerjaan:  1,
        id_jenjang_pekerjaan: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama_lowongan_pekerjaan: "Social Media Admin",
        batas_lamar: new Date('2024-12-31T23:59:59.999Z'),
        deskripsi_lowongan_pekerjaan: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        persyaratan_lowongan_pekerjaan: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        id_departemen_pekerjaan: 2,
        id_periode_pekerjaan: 1,
        id_tipe_pekerjaan:  1,
        id_jenjang_pekerjaan: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama_lowongan_pekerjaan: "Accounting Staff",
        batas_lamar: new Date('2024-12-31T23:59:59.999Z'),
        deskripsi_lowongan_pekerjaan: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        persyaratan_lowongan_pekerjaan: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        id_departemen_pekerjaan: 3,
        id_periode_pekerjaan: 1,
        id_tipe_pekerjaan:  1,
        id_jenjang_pekerjaan: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama_lowongan_pekerjaan: "UI/UX Designer",
        batas_lamar: new Date('2024-12-31T23:59:59.999Z'),
        deskripsi_lowongan_pekerjaan: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        persyaratan_lowongan_pekerjaan: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        id_departemen_pekerjaan: 1,
        id_periode_pekerjaan: 1,
        id_tipe_pekerjaan:  1,
        id_jenjang_pekerjaan: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama_lowongan_pekerjaan: "Front-end Engineer",
        batas_lamar: new Date('2024-12-31T23:59:59.999Z'),
        deskripsi_lowongan_pekerjaan: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        persyaratan_lowongan_pekerjaan: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        id_departemen_pekerjaan: 1,
        id_periode_pekerjaan: 1,
        id_tipe_pekerjaan:  1,
        id_jenjang_pekerjaan: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama_lowongan_pekerjaan: "Project Manager",
        batas_lamar: new Date('2024-12-31T23:59:59.999Z'),
        deskripsi_lowongan_pekerjaan: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        persyaratan_lowongan_pekerjaan: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        id_departemen_pekerjaan: 1,
        id_periode_pekerjaan: 1,
        id_tipe_pekerjaan:  1,
        id_jenjang_pekerjaan: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama_lowongan_pekerjaan: "Client Canvasing Staff",
        batas_lamar: new Date('2023-12-31T23:59:59.999Z'),
        deskripsi_lowongan_pekerjaan: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        persyaratan_lowongan_pekerjaan: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        id_departemen_pekerjaan: 4,
        id_periode_pekerjaan: 1,
        id_tipe_pekerjaan:  1,
        id_jenjang_pekerjaan: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama_lowongan_pekerjaan: "Back-end Engineer",
        batas_lamar: new Date('2024-12-31T23:59:59.999Z'),
        deskripsi_lowongan_pekerjaan: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        persyaratan_lowongan_pekerjaan: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        id_departemen_pekerjaan: 1,
        id_periode_pekerjaan: 1,
        id_tipe_pekerjaan:  1,
        id_jenjang_pekerjaan: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama_lowongan_pekerjaan: "UI/UX Designer",
        batas_lamar: new Date('2024-12-31T23:59:59.999Z'),
        deskripsi_lowongan_pekerjaan: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        persyaratan_lowongan_pekerjaan: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        id_departemen_pekerjaan: 1,
        id_periode_pekerjaan: 1,
        id_tipe_pekerjaan:  1,
        id_jenjang_pekerjaan: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("lowongan_pekerjaans", null, {});

  }
};
