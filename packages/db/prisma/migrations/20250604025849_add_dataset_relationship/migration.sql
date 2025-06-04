-- CreateTable
CREATE TABLE "Dataset" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "datasetGroupId" TEXT,

    CONSTRAINT "Dataset_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DatasetGroup" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DatasetGroup_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Dataset" ADD CONSTRAINT "Dataset_datasetGroupId_fkey" FOREIGN KEY ("datasetGroupId") REFERENCES "DatasetGroup"("id") ON DELETE SET NULL ON UPDATE CASCADE;
