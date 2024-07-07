import { NextFunction, Request, Response } from 'express';
import { UserServices } from './user.service';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';

const createStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { password, student: studentData } = req.body;

    const result = await UserServices.createStudentIntoDB(
      password,
      studentData,
    );

    // res.status(201).json({
    //   success: true,
    //   message: 'Student Created Successfully !!',
    //   data: result,
    // });
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Student Created Successfully !!!',
      data: result,
    });
  } catch (err) {
    // res.status(500).json({
    //   success: false,
    //   message: 'Something went wrong !!!',
    //   error: error.toString()
    // });
    next(err);
  }
};

export const UserController = {
  createStudent,
};
