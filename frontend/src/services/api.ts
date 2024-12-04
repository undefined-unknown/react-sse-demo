export const connectToSSE = (onData: (data: any) => void) => {
  const eventSource = new EventSource("/api/stream");

  eventSource.onmessage = (event) => {
    const data = JSON.parse(event.data);
    onData(data);
  };

  return () => {
    eventSource.close();
  };
};
