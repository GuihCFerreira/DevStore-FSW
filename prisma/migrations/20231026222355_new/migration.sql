/*
  Warnings:

  - You are about to drop the column `imageUrl1` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `imageUrl2` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `imageUrl3` on the `Product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "imageUrl1",
DROP COLUMN "imageUrl2",
DROP COLUMN "imageUrl3";
