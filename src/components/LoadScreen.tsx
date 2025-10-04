const CustomFullScreenLoading = () => {
    return (
      <div className="flex h-screen items-center justify-center">
          <div className="flex flex-col items-center gap-4">
              <div className="h-10 w-10 animate-spin rounded-full border-4 border-primary border-t-transparent">
              </div>
          </div>
          <p className="text-lg font-medium p-2">Un momento por favor ...</p>
      </div>
    )
  }
  
  export default CustomFullScreenLoading