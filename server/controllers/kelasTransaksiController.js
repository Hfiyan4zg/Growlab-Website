const db = require("../models");
// const kelasWishlistModel = db.kelas_wishlist;
const user = db.User;
const kelasBisnisModel = db.kelas_bisnis;
const kelasTransaksiModel = db.kelas_transaksi;
// const kelasKategoriModel = db.kelas_kategori;
// const kelasLevelModel = db.kelas_level;
// const kelasRegistModel = db.kelas_regist;
// const kelasRatingModel = db.kelas_rating;

module.exports = {
  addToKelasTransaksi: async (req, res) => {
    try {
      const userData = req.dataToken;
      const getuser = await user.findOne({
        where: {
          email: userData.email,
        },
        attributes: ["id"],
      });
      console.log({ userData });
      if (!getuser) {
        throw new Error("USER TIDAK DITEMUKAN");
      }

      const { id_kelas_bisnis, status_transaksi } = req.body;
      if (
        status_transaksi &&
        !["success", "canceled", "pending"].includes(status_transaksi)
      ) {
        return res.status(400).send({
          error:
            "Invalid value for 'status_transaksi'. Please provide a valid value.",
        });
      }
      const result = await kelasTransaksiModel.create({
        id_user: getuser.id,
        id_kelas_bisnis: id_kelas_bisnis,
        status_transaksi: status_transaksi,
        date_transaksi: new Date(),
      });

      res.status(200).send({
        message: "success",
        data: result,
      });
    } catch (error) {
      res.status(400).send({
        error: error.message,
      });
    }
  },

  getTransaksiByIdUser: async (req, res) => {
    try {
      const userData = req.dataToken;
      const getuser = await user.findOne({
        where: {
          email: userData.email,
        },
        attributes: ["id"],
      });
      console.log({ userData });
      if (!getuser) {
        throw new Error("USER TIDAK DITEMUKAN");
      }
      const result = await kelasTransaksiModel.findAll({
        where: {
          id_user: getuser.id,
        },
        include: [user, kelasBisnisModel],
      });

      res.status(200).send({
        message: "success",
        data: result,
      });
    } catch (error) {
      res.status(400).send({
        error: error.message,
      });
    }
  },

  getTransaksiByIdUserSuccess: async (req, res) => {
    try {
      const userData = req.dataToken;
      const getuser = await user.findOne({
        where: {
          email: userData.email,
        },
        attributes: ["id"],
      });
      // console.log({ userData });
      if (!getuser) {
        throw new Error("USER TIDAK DITEMUKAN");
      }
      const result = await kelasTransaksiModel.findAll({
        where: {
          id_user: getuser.id,
        },
        include: [
          {
            model: kelasBisnisModel,
            attributes: ["nama", "image", "harga", "images_link"],
          },
        ],
        attributes: [
          "id",
          "nomor_invoice",
          "date_transaksi",
          "status_transaksi",
        ],
      });

      res.status(200).send({
        message: "success",
        data: result,
      });
    } catch (error) {
      res.status(400).send({
        error: error.message,
      });
    }
  },
  getTransaksiByIdUserPending: async (req, res) => {
    try {
      const userData = req.dataToken;
      const getuser = await user.findOne({
        where: {
          email: userData.email,
        },
        attributes: ["id"],
      });
      // console.log({ userData });
      if (!getuser) {
        throw new Error("USER TIDAK DITEMUKAN");
      }
      const result = await kelasTransaksiModel.findAll({
        where: {
          id_user: getuser.id,
          status_transaksi: ["pending"],
        },
        include: [user, kelasBisnisModel],
      });

      res.status(200).send({
        message: "success",
        data: result,
      });
    } catch (error) {
      res.status(400).send({
        error: error.message,
      });
    }
  },
  getTransaksiByIdUserCanceled: async (req, res) => {
    try {
      const userData = req.dataToken;
      const getuser = await user.findOne({
        where: {
          email: userData.email,
        },
        attributes: ["id"],
      });
      // console.log({ userData });
      if (!getuser) {
        throw new Error("USER TIDAK DITEMUKAN");
      }
      const result = await kelasTransaksiModel.findAll({
        where: {
          id_user: getuser.id,
          status_transaksi: ["canceled"],
        },
        include: [user, kelasBisnisModel],
      });

      res.status(200).send({
        message: "success",
        data: result,
      });
    } catch (error) {
      res.status(400).send({
        error: error.message,
      });
    }
  },

  getTransaksiInvoice: async (req, res) => {
    try {
      // const userData = req.dataToken;
      // const getuser = await user.findOne({
      //   where: {
      //     email: userData.email,
      //   },
      //   attributes: ["id"],
      // });
      // console.log({ userData });
      // if (!getuser) {
      //   throw new Error("USER TIDAK DITEMUKAN");
      // }
      const result = await kelasTransaksiModel.findAll({
        where: {
          ...(id ? { id: id } : {}),
        },
        attributes: ["id", "nomor_invoice", "date_transaksi", "status_transaksi"],
        include: [
          { model: user, attributes: ["nama_lengkap", "email"] },
          {
            model: kelasBisnisModel,
            attributes: ["nama", "image", "harga", "images_link"],
          }
        ],
      });

      res.status(200).send({
        message: "success",
        data: result,
      });
    } catch (error) {
      res.status(400).send({
        error: error.message,
      });
    }
  },
};
