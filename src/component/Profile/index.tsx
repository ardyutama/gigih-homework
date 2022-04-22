import axios from "axios"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IUser } from "../../models/UsersResponse";
import { RootState } from "../../store/store";
import ProfileImage from "./ImageProfile"
import { getUserId } from "../../store/user-slice";
export default function Profile() {
  const [data,setData] = useState<IUser>({} as IUser);
  const currentToken = useSelector((state: RootState)=> state.token.value);
  const dispatch = useDispatch()
  const fetchData = async () => {
    await axios.get<IUser>(`https://api.spotify.com/v1/me`,{
      headers: {
        Authorization: `Bearer ${currentToken}`,
      },
    })
      .then((response: any) => {
        // console.log(response.data)
        setData(response.data)
        dispatch(getUserId(response.data.id));
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchData();
  },[currentToken])

    return (
      <>
        <p className="text-white text-lg">{data.display_name}</p>
        <ProfileImage />
      </>
      )
};
