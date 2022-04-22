import { Button, ScaleFade } from "@chakra-ui/react";

export default function Fab({ isOpen, onClick }) {
    return (
        <div className='bottom-8 sticky flex justify-end'>
            <ScaleFade initialScale={0.9} in={isOpen}>
                <Button variant='solid' colorScheme='yellow' onClick={onClick}>
                    Create Playlist
                </Button>
            </ScaleFade>
        </div>
    );
}
