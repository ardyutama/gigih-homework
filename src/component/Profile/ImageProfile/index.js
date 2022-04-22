import { Avatar } from "@chakra-ui/react";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../../store/auth-slice";

export default function ProfileCustom() {
    // let newName = name.toString().charAt(0);
    const dispatch = useDispatch();
    const userNavigation = [
        { name: "Logout", onclick: () => dispatch(logout()) },
    ];

    function classNames(...classes) {
        return classes.filter(Boolean).join(" ");
    }
    return (
        <Menu as='div' className='ml-3 relative'>
            <div>
                <Menu.Button className='max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'>
                    <span className='sr-only'>Open user menu</span>
                    {/* <div className="w-12 h-12 flex">
                    <p className="m-auto text-white font-semibold text-2xl">A</p>
                </div> */}
                    <Avatar src='https://bit.ly/broken-link' />
                </Menu.Button>
            </div>
            <Transition
                as={Fragment}
                enter='transition ease-out duration-100'
                enterFrom='transform opacity-0 scale-95'
                enterTo='transform opacity-100 scale-100'
                leave='transition ease-in duration-75'
                leaveFrom='transform opacity-100 scale-100'
                leaveTo='transform opacity-0 scale-95'
            >
                <Menu.Items className='origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'>
                    {userNavigation.map((item) => (
                        <Menu.Item key={item.name}>
                            {({ active }) => (
                                <button
                                    onClick={item.onclick}
                                    className={classNames(
                                        active ? "bg-gray-100" : "",
                                        "w-full px-4 py-2 text-sm text-gray-700",
                                    )}
                                >
                                    {item.name}
                                </button>
                            )}
                        </Menu.Item>
                    ))}
                </Menu.Items>
            </Transition>
        </Menu>
    );
}
