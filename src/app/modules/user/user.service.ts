import config from '../../config';
import { TStudent } from '../student/student.interface';
import { StudentModel } from '../student/student.model';
import { NewUser, TUser } from './user.interface';
import { User } from './user.model';

const createStudentIntoDB = async (password: string, studentData: TStudent) => {
  // create a user object
  //   const user: NewUser = {};
  const userData: Partial<TUser> = {};

  // if password is not given , use default password
  userData.password = password || (config.default_password as string);


  // set student role
  userData.role = 'student';


  //   set manually generated id
  userData.id = '2030101';

  //   create user
  const newUser = await User.create(userData);


  //   create a student
  if (Object.keys(newUser).length) {
    // set id, _id as user
    studentData.id = newUser.id;
    studentData.user = newUser._id;
  }


  //   return result;
  const newStudent = await StudentModel.create(studentData);
  return newStudent;
};

export const UserServices = {
  createStudentIntoDB,
};
