import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const NewsPost = () => {
  const [editor, setEditor] = useState("");
  return (
    <>
      <div className="bg-[#fff]">
        <form>
          <button
            type="submit"
            className="bg-[#f2f2f2] w-full text-start py-4 mt-4"
          >
            + upload news
          </button>

          <div className="w-full my-4 flex items-center justify-center flex-col">
            <label htmlFor="category">Select Category</label>
            <select name="" id="" className="w-full outline-none">
              <option value="">sports </option>
              <option value="">game </option>
              <option value="">current </option>
            </select>
          </div>

          <div className="mt-[50px]">
            <CKEditor
              editor={ClassicEditor}
              data={editor}
              onReady={(editor) => {
                console.log("Start Typing", editor);
              }}
              value={editor}
              onChange={(event, editor) => {
                const data = editor.getData();
                setEditor(data);

                // console.log({ event, editor, data });
              }}
              onBlur={(event, editor) => {
                console.log("Blur.", editor);
              }}
              onFocus={(event, editor) => {
                console.log("Focus.", editor);
              }}
            />
          </div>
        </form>
        <div className="flex items-center justify-center flex-col">
          <input type="file" className="relative text-white p-3" />
          <label htmlFor="image " className="absolute pl-2">
            Choose Image
          </label>
        </div>
      </div>
    </>
  );
};

export default NewsPost;
