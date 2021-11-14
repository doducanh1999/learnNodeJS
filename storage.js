import multer from "multer";

export const storage = multer.diskStorage({
    destination: function (_req, _file, cb){
        cb(null, `${process.cwd()}/public/files`);
    },
    filename: function (_req, file, cb){
        cb(null, `${Date.now()} - ${file.originalname}`);
    },
});

const upload = multer({storage});
export default upload;