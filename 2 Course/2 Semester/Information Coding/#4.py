import os
import sys

BMP_HEADER_SIZE = 54


def encode_image(input_img_name, output_img_name, file, degree):


    text_len = os.stat(file).st_size
    img_len = os.stat(input_img_name).st_size

    text = open(file, 'rb')
    input_image = open(input_img_name, 'rb')
    output_image = open(output_img_name, 'wb')

    bmp_header = input_image.read(BMP_HEADER_SIZE)
    output_image.write(bmp_header)

    text_mask, img_mask = create_masks(degree)
    count = 0
    while True:
        symbol = text.read(1)
        if not symbol:
            break
        symbol = ord(symbol)
        count+=1

        for byte_amount in range(0, 8, degree):
            img_byte = int.from_bytes(input_image.read(1), sys.byteorder) & img_mask
            bits = symbol & text_mask
            bits >>= (8 - degree)
            img_byte |= bits

            output_image.write(img_byte.to_bytes(1, sys.byteorder))
            symbol <<= degree

    output_image.write(input_image.read())

    text.close()
    input_image.close()
    output_image.close()
    return count
def decode_image(encoded_img, output_txt, symbols_to_read, degree):

    img_len = os.stat(encoded_img).st_size

    text = open(output_txt, 'wb')
    encoded_bmp = open(encoded_img, 'rb')

    encoded_bmp.seek(BMP_HEADER_SIZE)

    _, img_mask = create_masks(degree)
    img_mask = ~img_mask

    read = 0
    while read < symbols_to_read:
        symbol = 0

        for bits_read in range(0, 8, degree):
            img_byte = int.from_bytes(encoded_bmp.read(1), sys.byteorder) & img_mask
            symbol <<= degree
            symbol |= img_byte



        read += 1
        text.write(symbol.to_bytes(1, sys.byteorder))

    text.close()
    encoded_bmp.close()

    return True



def create_masks(degree):
    text_mask = 0b11111111
    img_mask = 0b11111111

    text_mask <<= (8 - degree)
    text_mask %= 256
    img_mask >>= degree
    img_mask <<= degree

    return text_mask, img_mask

c = encode_image("1.bmp", "0coded.bmp", "2.jpg",2)
decode_image("0coded.bmp","2decoded.jpg",c, 2)
