const CommentCard = () => {
  return (
    <div className="relative flex bg-white p-6">
      <button type="button" className="flex flex-col bg-slate-600">
        <div>+</div>
        <div>12</div>
        <div>-</div>
      </button>
      <div className="flex flex-col bg-slate-400">
        <div className="flex bg-slate-200">
          <div>avatar</div>
          <span>name</span>
          <span>1 month ago</span>
        </div>
        <p>
          Impressive! Though it seems the drag feature could be improved. But
          overall it looks incredible. Youve nailed the design and the
          responsiveness at various breakpoints works really well.
        </p>
      </div>
      <button type="button" className="absolute right-5 top-5 bg-slate-200">
        Reply
      </button>
    </div>
  );
};

export default CommentCard;
