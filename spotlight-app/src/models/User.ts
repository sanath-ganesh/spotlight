interface User {
  firstName: string;
  lastName: string;
  email: string;
  userType?: string;
  phone: {
      countryCode: string;
      phone: number;
  };
  location: string;
  username: string;
  password: string;
  profilePic?: string;
}

export default User;