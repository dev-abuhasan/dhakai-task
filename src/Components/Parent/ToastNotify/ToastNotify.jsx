import toast, { ToastBar, Toaster } from 'react-hot-toast';
import './ToastNotify.scss';
import { Icon } from '@material-ui/core';
export const ToastNotify = ({ undoFunction }) => {

    return (
        <Toaster
            position="bottom-right"
            reverseOrder={false}
            containerClassName="toastMain"


            toastOptions={{
                className: ' ',
                success: {
                    duration: 10000,
                    className: 'bg-success text-white py-3 mb-2 px-4',
                    theme: {
                        primary: 'green',
                        secondary: 'black',
                    },
                },

                error: {
                    duration: 10000,
                    className: 'bg-danger text-white py-3 mb-2 px-4 w-100',
                    theme: {
                        primary: 'green',
                        secondary: 'black',
                    },
                },
            }}
        >
            {(t) => (
                <ToastBar toast={t}>
                    {({ type, message }) => (
                        <div className="d-flex align-items-center">
                            {t.type === 'success' ?
                                <Icon onClick={() => toast.dismiss(t.id)} className="cursorPointer">check_circle_outline</Icon>
                                : <Icon onClick={() => toast.dismiss(t.id)} className="cursorPointer">cancel</Icon>
                            }
                            <span className="message">{message}</span>
                            {!undoFunction ?
                                <span onClick={() => toast.dismiss(t.id)} className="text-decoration-underline closeBtn cursorPointer">close</span>
                                :
                                <span className="text-decoration-underline closeBtn cursorPointer">Undo</span>
                            }
                        </div>
                    )}
                </ToastBar>
            )}
        </Toaster>
    );
};
