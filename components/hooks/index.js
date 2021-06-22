import useDeviceDetect from "./useDeviceDetect";
import useElementPosition from "./useElementPosition";
import useMouseTrack from "./useMouseTrack";
import useScroll from "./useScroll";
import useWindowSize from "./useWindowSize";
import useSmoothScroll from "./useSmoothScroll";
import useLocalStorage from "./useLocalStorage";
import useEventListener from "./useEventListener";
import useLockBodyScroll from "./useLockBodyScroll";
import useScript from "./useScript";
import useKeyPress from "./useKeyPress";
import useOnClickOutside from "./useOnClickOutside";
import useHover from "./useHover";
import useAsync from "./useAsync";

export * from "../hooks"

const Hooks = {
    useDeviceDetect,
    useElementPosition,
    useMouseTrack,
    useScroll,
    useWindowSize,
    useSmoothScroll,
    useLocalStorage,
    useEventListener,
    useLockBodyScroll,
    useScript,
    useKeyPress,
    useOnClickOutside,
    useHover,
    useAsync
}

export default Hooks;