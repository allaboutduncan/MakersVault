FROM python:3.11-slim
WORKDIR /app

RUN apt-get update \
  && apt-get install -y --no-install-recommends gosu \
  && rm -rf /var/lib/apt/lists/*

COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

COPY docker-entrypoint.sh /usr/local/bin/
# Strip any CRLF line endings (in case the repo was checked out on Windows
# with core.autocrlf=true) before making the script executable. Without this,
# the Linux kernel reads the shebang as "/bin/sh\r" and reports
# "no such file or directory" at container start.
RUN sed -i 's/\r$//' /usr/local/bin/docker-entrypoint.sh \
 && chmod +x /usr/local/bin/docker-entrypoint.sh

COPY . .
RUN mkdir -p /app/storage /app/data

EXPOSE 8000
ENTRYPOINT ["docker-entrypoint.sh"]
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
