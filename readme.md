General Stream Buffers
----------------------

##Readable Stream

* Emits 'readable' event when new data is added to stream.
* Makes no assumptions about what is streamed (files, objects, etc.)
* Use as per http://nodejs.org/api/stream.html#stream_class_stream_readable

##Writable Stream

* Use as per http://nodejs.org/api/stream.html#stream_class_stream_writable

##Streams for Testing

If you're trying to mock a string stream, look at https://www.npmjs.org/package/stream-buffers .  They break up the
stream into consistent pieces, and control the flow of raw data.