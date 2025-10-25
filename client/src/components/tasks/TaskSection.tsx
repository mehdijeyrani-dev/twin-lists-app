import { EllipsisVertical } from "lucide-react";
import type React from "react";

interface ISection {
  id: number;
  title: string;
  isEditing: boolean;
}

interface TaskSectionProps {
  boards: ISection[];
  setBoards: React.Dispatch<React.SetStateAction<ISection[]>>;
}

const TaskSection = ({ boards, setBoards }: TaskSectionProps) => {
  return (
    <>
      {boards.map((board) => (
        <div className="w-full sm:max-w-80 bg-green-600 flex flex-row">
          <div className="w-full flex items-center justify-between bg-rose-500">
            <div
              className="bg-transparent p-3 relative flex gap-2"
              key={board.id}
            >
              {board.isEditing ? (
                <>
                  <input
                    type="text"
                    autoFocus
                    placeholder="Board name"
                    value={board.title}
                    onChange={(e) =>
                      setBoards((prev) =>
                        prev.map((b) =>
                          b.id === board.id
                            ? { ...b, title: e.target.value }
                            : b
                        )
                      )
                    }
                    onBlur={() =>
                      setBoards((prev) =>
                        prev.map((b) =>
                          b.id === board.id ? { ...b, isEditing: false } : b
                        )
                      )
                    }
                    className="bg-transparent focus:outline-none absolute inset-0 px-2"
                  />
                  <span className="invisible inline-block">
                    {board.title || "Board name"}
                  </span>
                </>
              ) : (
                <h2
                  className="font-semibold text-purple-700 cursor-pointer inline-block"
                  onClick={() => {
                    setBoards((prev) =>
                      prev.map((b) =>
                        b.id === board.id ? { ...b, isEditing: true } : b
                      )
                    );
                  }}
                >
                  {board.title || "Untitled"}
                </h2>
              )}
              <span>4</span>
            </div>
            <div className="">
              <EllipsisVertical size={20} />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default TaskSection;
