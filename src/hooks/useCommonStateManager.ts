import { UseDispatch, useDispatch } from "react-redux";
import { useCallback } from "react";
import {setIsReduxMobile} from '@/redux/commonSlice'

const useCommonStateManager = () => {
    const dispatch = useDispatch()

    const changeIsReduxMobile = useCallback(
        (isReduxMobile:boolean) => {
            dispatch(setIsReduxMobile(isReduxMobile))
        },
        [dispatch]
    )

    return {
        changeIsReduxMobile
    }
}

export default useCommonStateManager