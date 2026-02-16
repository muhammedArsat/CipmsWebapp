import multer from "multer"
import { AppError } from "../utils/AppError.js"

const storage = multer.memoryStorage()

const excelFileFilter = (req: any, file: Express.Multer.File, cb: any) => {
    
    const allowedMimeTypes = [
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", // .xlsx
        "application/vnd.ms-excel", // .xls
        "text/csv", // .csv (optional)
    ]
    
    if (allowedMimeTypes.includes(file.mimetype)) {
        cb(null, true)
    } else {
        cb(new AppError('Only Excel files(,xlsx, .xls) are allowed!',400))
    }
}

export const uploadExcel = multer({
  storage: storage,
  fileFilter: excelFileFilter,
  limits: {
    fileSize: 10 * 1024 * 1024,
  },
})

