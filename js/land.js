/**
 * Created by ���ަ on 2016/11/7.
 */
(function (w) {
    function Land(ctx, img, speed) {
        this.ctx = ctx;
        this.img = img;
        this.speed = speed || 2;

        Land.len++;
        this.x = this.img.width * (Land.len - 1 );
        this.y = this.ctx.canvas.height - this.img.height;
    }
    Land.len = 0;
    util.extend(Land.prototype,{
        draw: function () {
            this.ctx.drawImage(this.img,this.x,this.y)
        },
        update: function () {
            this.x -= this.speed;
            this.x += this.x <= -this.img.width? this.img.width*Land.len: 0;
        }
    })
    //w.Land = Land;
    w.getLand = function (ctx, img, speed) {
        return new Land( ctx, img, speed );
    }
}(window))
