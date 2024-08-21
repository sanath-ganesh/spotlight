import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import router from './router.ts'
import { RouterProvider } from 'react-router-dom';
import { addComment, getAllComments, getCommentByCommentId, getCommentByUserId, removeComment, updateComment, } from './services/comment-services.ts';

import i18n from './i18n';
import { I18nextProvider } from 'react-i18next'
import { Provider } from 'react-redux';
import {store} from './store/index.ts';


ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <RouterProvider router={router}>
        </RouterProvider>
      </I18nextProvider>
    </Provider>
)
